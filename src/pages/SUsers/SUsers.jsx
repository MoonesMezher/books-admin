import { BarController, BarElement, CategoryScale, Chart, LinearScale } from "chart.js";
import { useEffect, useRef } from "react";

const SUsers = () => {
    const chartRef = useRef(null);

    let chartInstance = null;

  useEffect(() => {
    // Chart.register(LinearScale, BarController, BarElement, CategoryScale); // Register the linear scale
    // const ctx = chartRef.current;
    // if (chartInstance) {
    //   chartInstance.destroy();
    // }
    // chartInstance = new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         type: 'linear', // Specify the scale type as 'linear'
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
  }, []);
  
    return (
        <div>
            <h1 className='underline text-[2rem] font-bold mb-5'>Statistics Users</h1>
            <div>
                <canvas ref={chartRef} id="myChart" className="w-screen h-screen" />
            </div>
        </div>
    )
}

export default SUsers