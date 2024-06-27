'use client'
import React, { useCallback, useState } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import clsx from 'clsx';

const PdfButton = ({ title, pages }: { title: string, pages: number }) => {

    const [pagesBuilt, setpagesBuilt] = useState(0)

    const onButtonClick = useCallback(() => {

        const handleDownloadPDF = async () => {

            const slice = document.getElementById("slice0")

            if (slice === null) {
                return;
            }

            try {
                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [1520, 855]
                });

                for (let i = 0; i < pages; i++) {
                    const section = document.getElementById("slice" + i)
                    if (section) {
                        const dataUrl = await toPng(section, { cacheBust: true, });
                        if (i > 0) {
                            pdf.addPage();
                        }
                        pdf.addImage(dataUrl, 'PNG', 0, 0, 1520, 855, undefined, 'FAST');
                        setpagesBuilt(i+1)
                        console.log("page ", i, "created")
                    }
                }
                pdf.save(title);
            } catch (err) {
                console.error('Failed to capture screenshot and create PDF:', err);
            }
        }
        handleDownloadPDF()
    }, [pagesBuilt])

    return (
        <div>
            <p className="text-lg font-bold text-center text-gray-800">
                {pagesBuilt}/{pages} have been generated
            </p>
            <div className="flex items-center justify-center">
                <button onClick={onButtonClick} className={clsx("px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-75", pagesBuilt>0 && "px-6 py-3 bg-gray-300 text-gray-200 font-semibold rounded-lg shadow-md cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75 ml-4")}>
                    {
                        pagesBuilt === 0 ?
                        "Download as PDF" :
                        pagesBuilt === pages ?
                        "Done" :
                        "Generating"
                    }
                </button>
            </div>
        </div >
    );
};

export default PdfButton;
