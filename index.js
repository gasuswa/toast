class Toast {
    constructor() {
      this.container = document.createElement('div');
      this.container.classList.add('toast-container');
      document.body.appendChild(this.container);
    }
  
    show(message, duration = 3000) {
      const toast = document.createElement('div');
      toast.classList.add('toast');
      toast.textContent = message;
  
      this.container.appendChild(toast);
  
      setTimeout(() => {
        this.hide(toast);
      }, duration);
    }
  
    hide(toast) {
      if (toast && toast.parentNode === this.container) {
        this.container.removeChild(toast);
      }
    }
  }
  
  // Example styles for illustration purposes
  const styles = `
    .toast-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
  
    .toast {
      background-color: #333;
      color: #fff;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      max-width: 300px;
    }
  `;
  
  // Inject styles into the document
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
  
  // Example usage
  const toast = new Toast();
  
  toast.show('Hello, world!');
  toast.show('This is a toast message with a longer duration.', 5000);
  