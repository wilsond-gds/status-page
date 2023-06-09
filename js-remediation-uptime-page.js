// stop screenreaders reading out each SVG day image if this is used
const removeImageReadout = document.querySelectorAll('svg.day');
removeImageReadout.forEach(item=>item.setAttribute('aria-hidden', 'true'));
// add the word 'uptime' or 'no data' to the percentage counts on the Month headings if needed
const addCaptionToUptime = document.querySelectorAll('small.month-uptime');
addCaptionToUptime.forEach(item=>{ const currentText = item.textContent;
    console.log(currentText);
    if(currentText == ""){item.textContent="No data"}else{ item.textContent = currentText + ' uptime';}

})
// Collapse the month headings into a single DOM node for screen readers if needed
const removeVarWrapping = document.querySelectorAll('var[data-var=year]')
removeVarWrapping.forEach(item=>{
    const fullHeading = item.parentElement.textContent;
    item.parentElement.textContent = fullHeading;
    item.remove();
})
// Tell screen readers which is the selected tab for 'inner' pages
const reportSelectedTab = document.querySelector('a.current');
reportSelectedTab.setAttribute('aria-selected','true')