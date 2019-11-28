const Plot = require('./core/plot');

const fx = (x) => Math.sqrt(x + 1); // calculation on interval [-1, 1]

const difference = (func) => {
    let max = func(-1);
    for (let i = -1; i <= 1; i += 1e-2) {
        const temp = func(i);
        if (temp > max) {
            max = temp;
        }
    }

    console.log(`∆f = |f - Ф| = ${Math.abs(fx(1) - max)}`);
};



const zeroQ = () => Math.abs(fx(-1) - fx(1)) / 2;
difference(zeroQ);

const firstQ = (x) => (fx(1) / 2) * (x + 1) + Math.sqrt(2) / 8;

const secondQ = (x) => -x * x - firstQ(x);

const plot = new Plot();

plot.add(fx, 'sqrt(x + 1)', 1); // base function
plot.add(zeroQ, `Q0 ${zeroQ()}`, 1);
plot.add(firstQ, `Q1`, 1);
plot.add(secondQ, `Q2`, 1);


plot.draw();
