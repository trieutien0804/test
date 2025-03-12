import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const Test = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedModal, setSelectedModal] = useState<{
    pathId: string;
    x: number;
    y: number;
  } | null>(null);

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

          element
            .style("fill", "black")
            .style("stroke", "yellow")
            .style("stroke-width", "1px")
        })
        .on("mouseout", function () {
          const element = d3.select(this);
          element
            .style("fill", element.attr("data-original-fill"))
            .style("stroke", "none")
        })
        .on("click", function (event) {
          const element = d3.select(this);
          const pathId = element.attr("id") || "";

          setSelectedModal({
            pathId,
            x: event.clientX,
            y: event.clientY,
          });
        });
    });
  }, []);

  return (
    <div>
      <svg ref={svgRef} width={700} height={750} transform="translate(0, -100)" />
      <Modal
        isOpen={!!selectedModal}
        onClose={() => setSelectedModal(null)}
        data={selectedModal || undefined}
      />
    </div>
  );
};

export default Test;
