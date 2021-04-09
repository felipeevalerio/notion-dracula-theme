const customStyle = `
  :root {
    /* Dracula Theme */
    --dark: 40,42,54;
    --dark-1: rgb(var(--dark));
    -dark-2: rgba(var(--dark), .8);
    --dark-3: rgba(var(--dark), .6);
    --dark-4: rgba(var(--dark), .4);
    --dark-4: rgba(var(--dark), .2);

    --primary: 189,147,249; 
    --primary-1: rgb(var(--primary));
    --primary-2: rgba(var(--primary), 0.8);
    --primary-3: rgba(var(--primary), 0.6);
    --primary-4: rgba(var(--primary), 0.4);
    --primary-5: rgba(var(--primary), 0.2);

    --secondary:68,71,90;
    --secondary-1: rgba(var(--secondary), 0.8);
    --secondary-2: rgba(var(--secondary), 0.6);
  }

  body.dark .notion-sidebar-container {
      background-color: var(--dark-1) !important;
      color: #fff !important;
  }

  body.dark .notion-frame {
      background-color: var(--secondary-1) !important;
  }

  body.dark .notion-scroller > div:nth-child(1) {
      color: #eee!important
  }

  body.dark #notion-app > div > div > div.notion-sidebar-container > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1), 
  body.dark #notion-app > div > div > div.notion-sidebar-container > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(1) > span > div > div > div:nth-child(2), 
  body.dark .notion-topbar {
      color: #fff!important;
      background-color: var(--dark-1)!important;
      border-bottom: 1px solid var(--primary-4)
  }

  body.dark .notion-frame .notion-topbar .notion-selectable a {
      background: var(--secondary-2) !important;
      border-radius:8px;
  }

  body.dark .notion-frame .notion-selectable a {
    background: var(--dark-4);
  }


  /* float page */
  body.dark .notion-peek-renderer > div > div {
    background: var(--dark-2);
  }

  body.dark div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) {
    background: transparent !important;
  }

  /* scrollbar */
  body.dark .notion-scroller::-webkit-scrollbar {
    width: .4rem;
    height: .4rem;
    background: var(--dark-1);
  }

  body.dark .notion-scroller::-webkit-scrollbar * {
      background: transparent;
  }

  body.dark .notion-scroller::-webkit-scrollbar-thumb {
      background: var(--primary-2) !important;
      cursor: pointer;
      border-radius: 1.6rem;
  }

  body.dark .notion-scroller::-webkit-scrollbar-track {
    background: var(--dark-1);
  }


  /* disable topbar: for teaching purposes */
  body.dark #notion-app > div > div.notion-cursor-listener > div.notion-frame > div:nth-child(1),
  body.dark #notion-app > div > div.notion-cursor-listener > div.notion-help-button{
      /*display: none !important;*/
  }

  body.dark #notion-app .notion-topbar > div > div:nth-child(2){
    display:none !important;
  }
`;

window.addEventListener("DOMContentLoaded", () => {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = customStyle;
  document.head.append(styleEl);
});
