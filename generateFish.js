const {fish,reframe,cleanup,draw_svg,generate_params} = require('./fishdraw.js');
const fs = require("fs")


async function createFishies({name}){
    let polylines = fish(generate_params());
    fs.writeFileSync(`./samples/out${name}.svg`,draw_svg(cleanup(reframe(polylines, 20,name))));
}

[...Array(1000)].forEach(async (k,i) => {
    console.log(`Fishie #${i} has been made with <3`)
    await createFishies({name:i})
});

