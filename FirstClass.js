import react from "react";
class FirstClass extends react.Component{
    render()
    {
        return(
            <div>
                <h1>This is Class Component</h1>
                <p>"It doesn't take much to touch someone's heart," Daisy said with a smile on her face. "It's often just the little things you do that can change a person's day for the better." Daisy truly believed this to be the way the world worked, but she didn't understand that she was merely a robot that had been programmed to believe this.</p>
        <img src="logo512.png" width={200} height={200}></img>
        <table border="|">
            <tr>
                <th>Name</th>
                <th>Seat no</th>
                <th>Subject</th>
            </tr>
            <tr>
                <td>Piyush</td>
                <td>54043</td>
                <td>Internet Programming</td>
            </tr>
            <tr>
                <td>Shon</td>
                <td>54045</td>
                <td>Internet Programming</td>
            </tr>
        </table>
            </div>
        );
    }
} export default FirstClass;