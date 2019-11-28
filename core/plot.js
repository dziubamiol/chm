const nodeplotlib = require('nodeplotlib');

class Plot {
    #plots = [];

    /**
     *
     * @param {function} func Callback function to plot
     * @param {string} name
     * @param {number} scale = 2
     * @param {string} type = 'line'
     * @param {number} accuracy = 1e-4
     */
    add(func, name, scale = 2, type = 'line', accuracy = 1e-2) {
        const x = [];
        const y = [];
        for (let i = -scale; i <= scale; i += accuracy) {
            x.push(i);
            y.push(func(i));
        }

        const result = {
            x: x,
            y: y,
            type: type,
            name: name
        };

        this.#plots.push(result);
    };

    draw() {
        nodeplotlib.plot(this.#plots);
    }
}


module.exports = Plot;