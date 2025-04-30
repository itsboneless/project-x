window.onload = function() {
    
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
  };
  
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  };
  
  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'visible';
    }
  };


    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreContent();
      }
    });

    function loadMoreContent() {
      const loader = document.getElementById('loader');
      loader.style.display = 'block';

      setTimeout(() => {
        const grid = document.querySelector('.grid');
        const items = Array.from(grid.children).slice(0, 10);
        const shuffled = items.sort(() => Math.random() - 0.5);

        shuffled.forEach(item => {
          const clone = item.cloneNode(true);
          if (item.classList.contains('span-2')) {
            clone.classList.add('span-2');
          } else {
            clone.classList.remove('span-2');
          }
          grid.appendChild(clone);
        });

        loader.style.display = 'none';
      }, 500);
    }


