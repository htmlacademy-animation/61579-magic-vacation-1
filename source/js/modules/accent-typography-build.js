class AccentTypographyBuild {
  constructor(
      elementSelector,
      timer,
      classForActivate,
      property
  ) {

    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    let elementOffset = this._timeOffset;
    index++;

    if (isOdd(index)) {
      elementOffset = this._timeOffset + 100 + (index * 10);
    } else if (isEven(index)) {
      elementOffset = this._timeOffset + 200 + (index * 10);
    }

    span.style.transition = `${this._property} ${this._timer}ms ease ${elementOffset}ms`;

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter, index) => {
        fragment.appendChild(this.createElement(latter, index));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`accent-word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}

const introTitleFirstWord = new AccentTypographyBuild(`.intro__title-first-word`, 600, `accent-text--active`, `transform`);
setTimeout(() => {
  introTitleFirstWord.runAnimation();
}, 500);

const introTitleSecondWord = new AccentTypographyBuild(`.intro__title-second-word`, 600, `accent-text--active`, `transform`);
setTimeout(() => {
  introTitleSecondWord.runAnimation();
}, 800);

const introDate = new AccentTypographyBuild(`.intro__date`, 600, `accent-text--active`, `transform`);
setTimeout(() => {
  introDate.runAnimation();
}, 1700);


function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return Math.abs(n % 2) === 1;
}
