import React from "react";

export default async function page() {
  const response = await fetch(
    "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json"
  );
  const data = await response.json();

  return (
    <div className="">
      {/* {data.length} */}
      <ul>
        {data.map((item, index) => (
          <li className="border " key={index}>
            <h1>{item.name}</h1>
            <div className="bg-gray-200 text-xs p-4">
              <p>force: {item.force}</p>
              <p>level: {item.level}</p>
              <p>mechanic: {item.mechanic}</p>
              <p>equipment: {item.equipment}</p>
              <p>primaryMuscles: {JSON.stringify(item.primaryMuscles)}</p>
              <p>secondaryMuscles: {JSON.stringify(item.secondaryMuscles)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
