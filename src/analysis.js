
// Helpers

function itsEven(number) {
    return (number % 2 === 0);
}

function average(list) {
    const addList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );

    const average = addList / list.length;
    return average;
}

// Calculate medians

// Median general

const wagesCol = colombian.map(
    function (person) {
        return person.salary;
    }
);

const wagesColSorted = wagesCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function medianWages(list) {
    const halflist = parseInt(list.length / 2);
    if (itsEven(list.length)) {
        const elementA = list[halflist - 1];
        const elementB = list[halflist];

        const media = average([elementA, elementB]);
        return media;
    } else {
        const media = list[halflist];
        return media;
    }
}

const medianGeneralCol = medianWages(wagesColSorted);


// Median of top 10%

const spliceStart = parseInt((wagesColSorted.length * (100 - 10)) / 100);
const spliceCount = wagesColSorted.length - spliceStart;

const wagesColTop10 = wagesColSorted.splice(spliceStart, spliceCount);

const medianTop10Col = medianWages(wagesColTop10);

console.log(
    medianGeneralCol,
    medianTop10Col
);