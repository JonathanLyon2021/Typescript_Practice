export interface Drawable {
	id: number;
	name?: string;
	draw: (target: Node) => void;
}

/*
class Rect implements Drawable {
	id: number;
	draw(target: Node) {}
}

const thing: Drawable = {
	id: 0,
	draw: function (target: Node) { }
};
*/

enum Color { Red, Green, Blue }

let check = true;

const defaultColor: Color = Color.Red;

function draw(target: Node, ...items: Drawable[]): void {  }
