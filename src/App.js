import {useState} from "react";

const initialList = [
    {id: 1, name: '1  Create APP'},
    {id: 2, name: '2  Learn JS'},
    {id: 3, name: '3  Create IoS App'}, //up 3 instead 2
    {id: 4, name: '4  Create Web App'},
    {id: 5, name: '5  Learn React'},
];

function App() {

    const [list, setList] = useState(initialList);

    const up = (id) => {
        const index = list.findIndex(el => el.id === id);
        console.log('Up', id, index);
        const res = [...list.slice(0, index-1), list[index], list[index - 1],
            ...list.slice(index + 1)]
        setList(res);

    };

    const down = (id) => {
        const index = list.findIndex(el => el.id === id);
        console.log('Down', id, index);
        const res = [...list.slice(0, index), list[index + 1], list[index],
            ...list.slice(index + 2)]
        setList(res);
    };


    return (
        <div className="App">
            <ul>Reorder</ul>

            {list.map((el, index) => (
                <div key={el.id}>
                    {index !== 0 ? <button onClick={() => up(el.id)}>Up</button> : null}
                    {index !== list.length - 1 ? <button onClick={() => down(el.id)}>Down</button> : null}
                    {el.name}
                </div>))}

        </div>
    );
}

export default App;
