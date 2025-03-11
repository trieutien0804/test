import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const Test = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPathId, setSelectedPathId] = useState("");

  useEffect(() => {
    if (!svgRef.current) return;

    d3.xml("/test.svg").then((data) => {
      d3.select(svgRef.current).node()?.appendChild(data.documentElement);

      d3.select(svgRef.current)
        .selectAll(".part")
        .on("mouseover", function () {
          const element = d3.select(this);
          element.attr(
            "data-original-fill",
            element.style("fill") || element.attr("fill") || "none"
          );
          element.style("fill", "black");
        })
        .on("mouseout", function () {
          const element = d3.select(this);
          element.style("fill", element.attr("data-original-fill"));
        })
        .on("click", function () {
          const element = d3.select(this);
          const pathId = element.attr("id") || "";
          setSelectedPathId(pathId);
          setIsModalOpen(true);
        });
    });
  }, []);

  return (
    <div>
      <svg ref={svgRef} width={1000} height={10000} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pathId={selectedPathId}
      />
    </div>
  );
};

export default Test;
