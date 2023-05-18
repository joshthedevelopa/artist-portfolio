

export default class Slider {
    element: HTMLElement;
    slider!: HTMLElement;

    current: number = 0;
    length: number = 0;

    widthOffset: number = 0;

    constructor(element: HTMLElement) {
        this.element = element as HTMLElement;
        this._init();
    }

    private _init() : void {
        this.slider = this.element.getElementsByClassName("slide-imgs")[0] as HTMLElement;

        let list = this.slider.querySelectorAll('li') as NodeListOf<HTMLElement>;
        this.length = list.length;
        this.widthOffset = list[0].clientWidth;
    }

    private _change(index: number) {
        this.slider.querySelector('li.active')?.classList.remove('active');
        this.slider.querySelectorAll('li')[index].classList.add('active');

        let factor = this.current * 0.8;
        // if(this.current % 2 == 1) {
        //     factor = 0.25;
        // }
        let width = this.widthOffset * factor;

        this.slider.style.left = `-${width}px`;
        console.log(this.slider.style.left);
    }

    public next(): void {
        if(this.current + 1 < this.length) {
            this._change(++this.current);
        }
    }

    public prev(): void {
        if(this.current - 1 >= 0) {
            this._change(--this.current);
        }
    }
}