const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
// console.log(tabs);
// console.log(panels);

function onTabClick(event) {
    // Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'active',
            'border-softRed',
            'border-b-4',
            'md:border-b-0',
        );
        // tab.classList.remove('active');
    });

    // Hide all panels
    panels.forEach((panel) => {
        panel.classList.add('hidden');
    });

    // Activate a new tab and panel based on the target
    event.target.classList.add('active', 'border-softRed', 'border-b-4');
    const classString = event.target.getAttribute('data-target');
    console.log(classString);

    const targetPanel = document.querySelector('.' + classString);
    targetPanel.classList.remove('hidden');

    // Alternatiuvely, you can use the following code to add the active class to the clicked tab
    // document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');
}

// Tabs menu event listener
tabs.forEach((tab) => {
    console.log(tab);
    tab.addEventListener('click', onTabClick)
});