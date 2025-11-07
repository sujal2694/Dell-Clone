"use client"
import { useState } from "react"


const FilterBar = ({ }) => {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);

    const Open1 = () => {
        setOpen1(!open1)
    }

    const Open2 = () => {
        setOpen2(!open2)
    }

    const Open3 = () => {
        setOpen3(!open3)
    }


    const Open4 = () => {
        setOpen4(!open4)
    }


    const Open5 = () => {
        setOpen5(!open5)
    }

    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 207990
    });

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), priceRange.max);
        setPriceRange({
            ...priceRange,
            min: value
        });
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), priceRange.min);
        setPriceRange({
            ...priceRange,
            max: value
        });
    };


    return <div className="min-w-[400px] min-h-[100vh]">
        <div className="max-w-full px-7 mb-10">
            <h1 className="text-[18px] font-normal">Filter Results</h1>
        </div>
        <div className={open1 === true ? "w-[85%] m-auto shadow-[0_0_2px_1px_#e2e2e2] rounded-[5px] p-5" : "w-[85%] m-auto rounded-[5px] p-5 bg-gray-200"}>
            <div onClick={Open1} className="group flex items-center justify-between">
                <h2 className="group-hover:text-blue-500">Storage Size</h2>
                {open1 === true
                    ? <i className="fa fa-caret-up group-hover:text-blue-500"></i>
                    : <i className="fa fa-caret-down group-hover:text-blue-500"></i>
                }
            </div>
            {open1 === true
                ? <div className="mt-2.5 text-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">1 TB SSD</p>
                        </div>
                        <p>(3)</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">512 TB SSD</p>
                        </div>
                        <p>(11)</p>
                    </div>
                </div>
                : ""
            }

        </div>


        <div className={open2 === true ? "w-[85%] m-auto shadow-[0_0_2px_1px_#e2e2e2] rounded-[5px] p-5 mt-3" : "w-[85%] m-auto rounded-[5px] p-5 bg-gray-200 mt-3"}>
            <div onClick={Open2} className="group flex items-center justify-between">
                <h2 className="group-hover:text-blue-500">Processor Varient</h2>
                {open2 === true
                    ? <i className="fa fa-caret-up group-hover:text-blue-500"></i>
                    : <i className="fa fa-caret-down group-hover:text-blue-500"></i>
                }
            </div>
            {open2 === true
                ? <div className="mt-2.5 text-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">AMD Ryzen<sup className="text-[8px]">TM</sup> 5</p>
                        </div>
                        <p>(2)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">AMD Ryzen<sup className="text-[8px]">TM</sup> 7</p>
                        </div>
                        <p>(1)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">13th Generation Intel® Core™ i5</p>
                        </div>
                        <p>(1)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">Intel® core<sup className="text-[8px]">TM</sup> 7 processor 150U</p>
                        </div>
                        <p>(11)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">Intel Core Ultra 7</p>
                        </div>
                        <p>(3)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">Intel Core Ultra 5</p>
                        </div>
                        <p>(1)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">Intel® Core<sup className="text-[8px]">TM</sup> 3 Processor 100U</p>
                        </div>
                        <p>(1)</p>
                    </div>
                </div>
                : ""
            }

        </div>


        <div className={open3 === true ? "w-[85%] m-auto shadow-[0_0_2px_1px_#e2e2e2] rounded-[5px] p-5 mt-3" : "w-[85%] m-auto rounded-[5px] p-5 bg-gray-200 mt-3"}>
            <div onClick={Open3} className="group flex items-center justify-between">
                <h2 className="group-hover:text-blue-500">Price</h2>
                {open3 === true
                    ? <i className="fa fa-caret-up group-hover:text-blue-500"></i>
                    : <i className="fa fa-caret-down group-hover:text-blue-500"></i>
                }
            </div>
            {open3 === true && (
                <div className="mt-2.5 text-gray-700">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                type="range"
                                className="range-blue w-[45%]"
                                min={0}
                                max={207990}
                                value={priceRange.min}
                                onChange={handleMinChange}
                            />
                            <input
                                type="range"
                                className="range-blue w-[45%]"
                                min={0}
                                max={207990}
                                value={priceRange.max}
                                onChange={handleMaxChange}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                className="w-[100px] p-1 border rounded text-sm"
                                value={priceRange.min}
                                onChange={handleMinChange}
                            />
                            <span>-</span>
                            <input
                                type="number"
                                className="w-[100px] p-1 border rounded text-sm"
                                value={priceRange.max}
                                onChange={handleMaxChange}
                            />
                            <button className="bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded">
                                GO
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>

        <div className={open4 === true ? "w-[85%] m-auto shadow-[0_0_2px_1px_#e2e2e2] rounded-[5px] p-5 mt-3" : "w-[85%] m-auto rounded-[5px] p-5 bg-gray-200 mt-3"}>
            <div onClick={Open4} className="group flex items-center justify-between">
                <h2 className="group-hover:text-blue-500">Model</h2>
                {open4 === true
                    ? <i className="fa fa-caret-up group-hover:text-blue-500"></i>
                    : <i className="fa fa-caret-down group-hover:text-blue-500"></i>
                }
            </div>
            {open4 === true
                ? <div className="mt-2.5 text-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">Inspiron 3535</p>
                        </div>
                        <p>(1)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">Inspiron 7440</p>
                        </div>
                        <p>(4)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">XPS 9350</p>
                        </div>
                        <p>(1)</p>
                    </div>
                </div>
                : ""
            }

        </div>
        
        <div className={open5 === true ? "w-[85%] m-auto shadow-[0_0_2px_1px_#e2e2e2] rounded-[5px] p-5 mt-3" : "w-[85%] m-auto rounded-[5px] p-5 bg-gray-200 mt-3"}>
            <div onClick={Open5} className="group flex items-center justify-between">
                <h2 className="group-hover:text-blue-500">Memory (RAM)</h2>
                {open5 === true
                    ? <i className="fa fa-caret-up group-hover:text-blue-500"></i>
                    : <i className="fa fa-caret-down group-hover:text-blue-500"></i>
                }
            </div>
            {open5 === true
                ? <div className="mt-2.5 text-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">8 GB</p>
                        </div>
                        <p>(2)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">16 GB</p>
                        </div>
                        <p>(9)</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-[14px]">32 GB</p>
                        </div>
                        <p>(1)</p>
                    </div>
                </div>
                : ""
            }

        </div>



    </div>
}

export default FilterBar