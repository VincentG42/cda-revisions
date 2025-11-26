import './style.css'
import { cards, categories } from './data.js'

const app = {
  state: {
    activeCategory: 'All',
    cards: cards
  },

  init() {
    this.cacheDOM();
    this.renderFilters();
    this.renderCards();
    this.bindEvents();
  },

  cacheDOM() {
    this.dom = {
      filters: document.getElementById('filters'),
      grid: document.getElementById('card-grid'),
      modal: document.getElementById('card-modal'),
      closeModalBtn: document.getElementById('close-modal'),
      modalCategory: document.getElementById('modal-category'),
      modalQuestion: document.getElementById('modal-question'),
      modalAnswer: document.getElementById('modal-answer'),
      modalKeywords: document.getElementById('modal-keywords')
    };
  },

  bindEvents() {
    // Filters
    this.dom.filters.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        this.setCategory(e.target.dataset.category);
      }
    });

    // Open Modal
    this.dom.grid.addEventListener('click', (e) => {
      const cardEl = e.target.closest('.card');
      if (cardEl) {
        const cardId = parseInt(cardEl.dataset.id);
        const card = this.state.cards.find(c => c.id === cardId);
        if (card) this.openModal(card);
      }
    });

    // Close Modal
    this.dom.closeModalBtn.addEventListener('click', () => this.closeModal());
    this.dom.modal.addEventListener('click', (e) => {
      if (e.target === this.dom.modal) this.closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.dom.modal.open) this.closeModal();
    });
  },

  setCategory(category) {
    this.state.activeCategory = category;
    this.renderFilters();
    this.renderCards();
  },

  openModal(card) {
    this.dom.modalCategory.textContent = card.category;
    this.dom.modalQuestion.textContent = card.question;
    this.dom.modalAnswer.innerHTML = card.answer;
    this.dom.modalKeywords.innerHTML = card.keywords
      .map(k => `<span class="keyword">#${k}</span>`)
      .join('');

    this.dom.modal.showModal();
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  },

  closeModal() {
    this.dom.modal.close();
    document.body.style.overflow = '';
  },

  renderFilters() {
    this.dom.filters.innerHTML = categories.map(cat => `
      <button 
        class="filter-btn ${cat === this.state.activeCategory ? 'active' : ''}"
        data-category="${cat}"
      >
        ${cat}
      </button>
    `).join('');
  },

  renderCards() {
    const filteredCards = this.state.activeCategory === 'All'
      ? this.state.cards
      : this.state.cards.filter(c => c.category === this.state.activeCategory);

    this.dom.grid.innerHTML = filteredCards.map((card, index) => `
      <div class="card-container" style="animation-delay: ${index * 0.05}s">
        <div class="card" data-id="${card.id}">
          <span class="card-category">${card.category}</span>
          <p class="card-question">${card.question}</p>
        </div>
      </div>
    `).join('');
  }
};

app.init();
