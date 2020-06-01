import './mainPageItem.css'

class MainPageItem {
    constructor({ wordGroup, imgGroup, name }) {
        this.wordGroup = wordGroup;
        this.imgGroup = imgGroup;
        this.name = name;
    }

    generateGroup(isTrain) {
        const groupdItem = document.createElement('div');
        const greenBack = isTrain ? '' : 'green';
        groupdItem.classList.add('card-container');
        groupdItem.classList.add('section-group');
        groupdItem.innerHTML = `
            <a class="main-card ${greenBack}" name=${this.name}>
                <img src=${this.imgGroup} alt=${this.wordGroup}>${this.wordGroup}
            </a>
        `
        return groupdItem
    }
}

// const renderGroupItem = (groupdItem) => {
//     const item = new MinPageItem(groupdItem)
//     return item.generateGroup()
// }

export default MainPageItem