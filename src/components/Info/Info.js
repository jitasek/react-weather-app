export default function Info({ data }) {
  const result = data.temp ? (
    <div>
      <h3>Temperature {data.temp}°C </h3>
      <h4> Min {data.min}°C </h4>
      <h4>Max {data.max}°C</h4>
    </div>
  ) : (
    <></>
  );
  return result;
}
