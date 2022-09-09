const { readFile, writeFile } = require('fs').promises
// const { readFile, writeFile } = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {

    // const first1 = await readFilePromise('../content/first.txt', 'utf8')
    // console.log(first1);
    // const second2 = await readFilePromise('../content/second.txt', 'utf8')

    // await writeFilePromise(
    //     '../content/result-mind-grenade.txt',
    //     `THIS IS AWESOME now : ${first1} ${second2}`,
    //     { flag: 'a' }
    // )
    // console.log(first1, second2);

    const first = await readFile('../content/first.txt', 'utf8')
    console.log(first);
    const second = await readFile('../content/second.txt', 'utf8')
    console.log(second);
    await writeFile(
      '../content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))