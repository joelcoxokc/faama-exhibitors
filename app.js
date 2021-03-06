window.EXHIBITOR_SPONSORS_DATA = window.EXHIBITOR_SPONSORS_DATA || {};
  window.EXHIBITOR_SPONSORS_DATA.EXHIBITORS_LIST = window.EXHIBITOR_SPONSORS_DATA.EXHIBITORS_LIST || [];
  window.EXHIBITOR_SPONSORS_DATA.EXHIBITORS_LIST = window.EXHIBITOR_SPONSORS_DATA.EXHIBITORS_LIST.concat(exhibitors);
  window.DATA_VIEW_PORT_ID = 'sponsors-list-view';
  
  (function DOCUMENT_READY(callback) {
    if (window && !window.jQuery) {
      callback(window.EXHIBITOR_SPONSORS_DATA, window.DATA_VIEW_PORT_ID);
    } else {
      jQuery(document).ready(function() {
        callback(window.EXHIBITOR_SPONSORS_DATA, window.DATA_VIEW_PORT_ID);
      })
    }

  })(function(DATA, dataViewPortId) {
    var DIV = document.createElement('DIV');
    var dataViewPortElement = document.getElementById(dataViewPortId);
    DIV.classList.add('sponsor-section');
    
    if (!dataViewPortElement) return

    dataViewPortElement.appendChild(DIV);

    DATA.SPONSORS_LIST = [
      {
        heading: 'Platinum',
        content: DATA.EXHIBITORS_LIST.filter(item => item.level === 'platinum')
      },
      {
        heading: 'Gold',
        content: DATA.EXHIBITORS_LIST.filter(item => item.level === 'gold')
      },
      {
        heading: 'Silver',
        content: DATA.EXHIBITORS_LIST.filter(item => item.level === 'silver')
      },
      {
        heading: 'Bronze',
        content: DATA.EXHIBITORS_LIST.filter(item => item.level === 'bronze')
      }
    ];

    console.log('RUNNING', DATA, dataViewPortElement, DIV);
    sponsors();
    exhibitors();
    dataViewPortElement.innerHTML = DIV.outerHTML;

    function sponsors() {
      DATA.SPONSORS_LIST.forEach(section => {
        var container = document.createElement('DIV');
        var header = document.createElement('h2');
        header.textContent = section.heading;
        header.classList.add('section-header-custom', section.heading.toLowerCase());
        container.classList.add('sponsor-section');
        container.appendChild(header);

        section.content.forEach(company => {
          var a = document.createElement('a');
          a.setAttribute('href', company.site);
          a.classList.add('sponsor');
          var img = document.createElement('img');
          img.setAttribute('src', company.img);
          img.setAttribute('alt', company.name);
          a.appendChild(img);
          container.appendChild(a);
        });

        DIV.appendChild(container);
      });
    }

    function exhibitors() {
      var container = document.createElement('DIV');
      var header = document.createElement('h2');
      header.textContent = 'Exhibitors';
      header.classList.add('section-header-custom', 'exhibitors');
      container.classList.add('sponsor-section');
      container.appendChild(header);
      DIV.appendChild(container);
      DATA.EXHIBITORS_LIST.forEach(company => {
        var a = document.createElement('a');
        a.setAttribute('href', company.site);
        a.classList.add('sponsor');
        var img = document.createElement('img');
        img.setAttribute('src', company.img);
        img.setAttribute('alt', company.name);
        a.appendChild(img);
        container.appendChild(a);
      });
    }
  });