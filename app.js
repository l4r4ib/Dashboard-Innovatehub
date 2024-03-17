console.log('js Connected');
// increasing the height of the folder menu to give the drop down effect
document.querySelectorAll('.folder-name').forEach(folder => {
    folder.addEventListener('click', function() {
        const subItems = this.nextElementSibling;
        const allSubmenus = document.querySelectorAll('.sub-items'); //Closing all other submenu that are open first
        allSubmenus.forEach(submenu => {
            if (submenu !== subItems && submenu.style.height) {
                submenu.style.height = '';
            }
        });
        subItems.style.height = subItems.style.height ? '' : subItems.scrollHeight + 'px';
    });
});


//search feature implemented for each keystroke 
const searchBar = document.querySelector('.search-bar input');
const companyRows = document.querySelectorAll('.company-row');

searchBar.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    
    companyRows.forEach(row => {
        const companyId = row.id;
        const display = companyId.includes(searchTerm) ? 'table-row' : 'none';
        row.style.display = display;
    });
});


