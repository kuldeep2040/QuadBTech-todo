import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularGraph = () => {
    const pendingLength = (useSelector(state => state.todo.todos)).length;
    const compeletedLength = (useSelector(state => state.compeleted)).length
    const data = {
        labels: ['Done', 'Pending'],
        datasets: [
            {
                label: 'Task Status',
                data: [pendingLength, compeletedLength],
                backgroundColor: ['#142E15', '#3F9142'],
                hoverBackgroundColor: ['#142E15', '#3F9142'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="w-64 h-64 mx-auto">
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default CircularGraph