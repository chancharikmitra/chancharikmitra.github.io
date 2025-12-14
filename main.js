// ============================================
// THEME TOGGLE
// ============================================
function toggleTheme() {
    const html = document.documentElement;
    const checkbox = document.getElementById('themeToggle');
    
    if (checkbox.checked) {
        // Checkbox checked = light mode
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        // Checkbox unchecked = dark mode
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme (dark is default)
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const checkbox = document.getElementById('themeToggle');
    
    if (savedTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        if (checkbox) checkbox.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (checkbox) checkbox.checked = false;
    }
}

// ============================================
// NEWS RENDERING
// ============================================
function renderNews() {
    const container = document.getElementById('newsList');
    if (!container || !newsItems || newsItems.length === 0) return;

    container.innerHTML = '';

    newsItems.forEach(item => {
        const newsEl = document.createElement('div');
        newsEl.className = 'news-item';

        let contentHtml = item.content;
        
        // Add links if present
        if (item.links && item.links.length > 0) {
            const linksHtml = item.links.map(link => 
                `<a href="${link.url}" class="news-link" target="_blank">${link.text}</a>`
            ).join(' · ');
            contentHtml += ` <span class="news-links">[${linksHtml}]</span>`;
        }

        newsEl.innerHTML = `
            <span class="news-date">${item.date}</span>
            <span class="news-content">${contentHtml}</span>
        `;

        container.appendChild(newsEl);
    });
}

// ============================================
// AUTHOR LINKING
// ============================================
function formatAuthor(authorName) {
    // Check if this is "me" (Chancharik Mitra, with or without asterisk)
    const cleanName = authorName.replace('*', '');
    const isMe = cleanName.trim() === 'Chancharik Mitra';
    
    // Check if author has a URL in the database
    const authorData = authorInfo[cleanName.trim()];
    
    if (isMe) {
        return `<span class="me">${authorName}</span>`;
    } else if (authorData && authorData.url) {
        return `<a href="${authorData.url}" class="author-link" target="_blank" title="${authorData.affiliation || ''}">${authorName}</a>`;
    } else {
        return authorName;
    }
}

function formatAuthors(authors) {
    return authors.map(formatAuthor).join(', ');
}

// ============================================
// PUBLICATIONS FILTERING & RENDERING
// ============================================
let activeFilters = new Set();

function renderPublications() {
    const container = document.getElementById('publicationsList');
    if (!container) return;
    
    container.innerHTML = '';

    publications.forEach((pub, index) => {
        const hasActiveFilter = activeFilters.size === 0 || 
            pub.tags.some(tag => activeFilters.has(tag));

        const pubEl = document.createElement('div');
        pubEl.className = `publication ${hasActiveFilter ? '' : 'hidden'}`;
        pubEl.dataset.index = index;

        const authorsHtml = formatAuthors(pub.authors);

        const tagsHtml = pub.tags.map(tag => 
            `<span class="pub-tag ${tag}">${tagLabels[tag]}</span>`
        ).join('');

        // Build links
        let linksHtml = '';
        if (pub.links.paper && pub.links.paper !== '#') {
            linksHtml += `<a href="${pub.links.paper}" class="pub-link" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>Paper</a>`;
        }
        if (pub.links.code && pub.links.code !== '#') {
            linksHtml += `<a href="${pub.links.code}" class="pub-link" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                </svg>Code</a>`;
        }
        if (pub.links.project && pub.links.project !== '#') {
            linksHtml += `<a href="${pub.links.project}" class="pub-link" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>Project</a>`;
        }
        linksHtml += `<button class="pub-link" onclick="showBibtex(${index})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
            </svg>BibTeX</button>`;

        // Paper image (if available)
        const imageHtml = pub.image 
            ? `<div class="pub-image"><img src="${pub.image}" alt="${pub.title} figure"></div>`
            : '';

        pubEl.innerHTML = `
            ${imageHtml}
            <div class="pub-content">
                <h3 class="pub-title"><a href="${pub.links.paper || '#'}" target="_blank">${pub.title}</a></h3>
                <p class="pub-authors">${authorsHtml}</p>
                <p class="pub-venue">${pub.venue}</p>
                ${tagsHtml ? `<div class="pub-tags">${tagsHtml}</div>` : ''}
                <div class="pub-links">${linksHtml}</div>
            </div>
        `;

        container.appendChild(pubEl);
    });
}

function toggleFilter(tag) {
    const btn = document.querySelector(`.tag-filter[data-tag="${tag}"]`);
    if (activeFilters.has(tag)) {
        activeFilters.delete(tag);
        btn.classList.remove('active');
    } else {
        activeFilters.add(tag);
        btn.classList.add('active');
    }
    renderPublications();
}

function clearFilters() {
    activeFilters.clear();
    document.querySelectorAll('.tag-filter').forEach(btn => btn.classList.remove('active'));
    renderPublications();
}

// ============================================
// BIBTEX MODAL
// ============================================
function showBibtex(index) {
    const pub = publications[index];
    document.getElementById('bibtexCode').textContent = pub.bibtex;
    document.getElementById('bibtexModal').classList.add('active');
}

function closeBibtexModal() {
    document.getElementById('bibtexModal').classList.remove('active');
}

function copyBibtex() {
    const bibtex = document.getElementById('bibtexCode').textContent;
    navigator.clipboard.writeText(bibtex).then(() => {
        const btn = document.querySelector('.bibtex-copy');
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy to Clipboard'; }, 2000);
    });
}

// ============================================
// FIGURE OVERLAY
// ============================================
function openFigureOverlay() {
    document.getElementById('figureOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFigureOverlay() {
    document.getElementById('figureOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// NAVIGATION HIGHLIGHTING
// ============================================
function initNavHighlight() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBibtexModal();
            closeFigureOverlay();
        }
    });

    // Close bibtex modal when clicking outside
    const bibtexModal = document.getElementById('bibtexModal');
    if (bibtexModal) {
        bibtexModal.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeBibtexModal();
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderNews();
    renderPublications();
    initNavHighlight();
    initKeyboardShortcuts();
});
