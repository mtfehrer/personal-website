import { useRef } from "react";
import "./Chart.css";

type Props = {
    title: string;
    color: string;
    rowLabels: string[];
    columnLabels: string[];
    barSizes: number[];
};

const Chart: React.FC<Props> = ({
    title,
    color,
    rowLabels,
    columnLabels,
    barSizes,
}: Props) => {
    const grid = useRef<HTMLDivElement>(null);

    return (
        <div className="container">
            <h1 className="title">{title}</h1>
            <div
                ref={grid}
                className="grid"
                style={{
                    gridTemplateColumns: `repeat(${
                        columnLabels.length + 1
                    }, 1fr)`,
                }}
            >
                <div className="placeholder"></div>
                {columnLabels.map((l) => {
                    return <div className="column-header block">{l}</div>;
                })}
                {rowLabels.map((r, i) => {
                    return (
                        <>
                            <div className="row-header block">{r}</div>
                            <div
                                className="bar block"
                                style={{
                                    gridColumn: `2 / ${barSizes[i]}`,
                                    backgroundColor: `${color}`,
                                }}
                            ></div>
                            {barSizes[i] < columnLabels.length + 2 ? (
                                <div
                                    className="placeholder"
                                    style={{
                                        gridColumn: `${barSizes[i]} / ${
                                            columnLabels.length + 2
                                        }`,
                                    }}
                                ></div>
                            ) : null}
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Chart;
