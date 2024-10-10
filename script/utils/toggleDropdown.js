document.addEventListener('DOMContentLoaded', () => {
    const dropDowns = document.querySelectorAll('.dropdown');

    dropDowns.forEach(dropDown => {
        let buttonDropDown = dropDown.querySelector('.dropdown__button');
        let dropDownContent = dropDown.querySelector('.dropdown__content');
        let dropDownContentList = dropDown.querySelector('.dropdown__content ul');
        let buttonCloseDropdown = dropDownContent.querySelector('form button');

        // Event to open/close the dropdown
        buttonDropDown.addEventListener('click', () => {
            dropDownContent.classList.toggle('hidden');
            buttonDropDown.classList.toggle('hidden');
        });

        // Event to close the dropdown when the closing button is clicked
        buttonCloseDropdown.addEventListener('click', (event) => {
            event.stopPropagation();
            dropDownContent.classList.add('hidden');
            buttonDropDown.classList.remove('hidden');
        });
        // Event to close the dropdown when a keyword in the dropdown content list is clicked
        dropDownContentList.addEventListener('click', event => {
            dropDownContent.classList.toggle('hidden');
            buttonDropDown.classList.toggle('hidden')
        })

        // Event to close the dropdown if we click outside
        document.addEventListener('click', (event) => {
            if (!dropDown.contains(event.target)) {
                dropDownContent.classList.add('hidden');
                buttonDropDown.classList.remove('hidden');
            }
        });
    });
});
