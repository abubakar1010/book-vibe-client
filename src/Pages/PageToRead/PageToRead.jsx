
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";




const PageToRead = () => {

  const data = useLoaderData();

  console.log(data);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
      y + height / 3
    } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#8884d8', '#82ca9d', '#ffc658', '#8884d8'];
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };



  return (
    <div className=" w-[460px] h-[440px] md:w-[770px] md:[42opx] xl:w-[1170px] xl:h-[540px] ">
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
      className=""
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName"
        interval={0} // Display every label
        angle={-20} // Rotate labels by -45 degrees
        textAnchor="end" // Anchor labels at the end
        height={120} // Increase height to accommodate rotated labels
        className="text-xs md:text-base xl:text-lg" />
      <YAxis />
      <Bar
        dataKey="totalPages"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data.map((element, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Bar>
    </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;