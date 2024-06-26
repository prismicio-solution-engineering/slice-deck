'use client'
import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { components as slidesComponents } from "@/slices/slides";
import Scaler from './Slides/Scaler';
import jsPDF from 'jspdf';
import { SliceZone } from '@prismicio/react';
import { asText, type SliceZone as TSliceZone } from '@prismicio/client';
import { DeckDocumentData, DeckDocumentDataSlicesSlice, SettingsDocumentData, Simplify } from '@/prismicio-types';

const PdfDeck = ({ slices, context }: {
    slices: TSliceZone<DeckDocumentDataSlicesSlice>, context: {
        page: Simplify<DeckDocumentData>;
        settings: Simplify<SettingsDocumentData>;
    }
}) => {
    const componentRefs = useRef<HTMLDivElement[]>([]);

    const handleDownloadPDF = async () => {

        if (componentRefs.current === null) {
            return;
        }

        try {
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [1520, 855]
            });

            for (let i = 0; i < componentRefs.current.length; i++) {
                const section = componentRefs.current[i];
                if (section) {
                    const dataUrl = await toPng(section);
                    if (i > 0) {
                        pdf.addPage();
                    }
                    pdf.addImage(dataUrl, 'PNG', 0, 0, 1520, 855, undefined, 'FAST');
                }
            }
            pdf.save(asText(context.page.title));
        } catch (err) {
            console.error('Failed to capture screenshot and create PDF:', err);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <button onClick={handleDownloadPDF} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-75">
                    Download as PDF
                </button>
            </div>
            {/* The component you want to capture */}
            {slices.map((slice, index) => (
                <Scaler>
                    <div key={index} className="relative p-8" ref={(el) => {
                        if (el) {
                            componentRefs.current[index] = el
                        }
                    }
                    }>
                        <SliceZone slices={[slice]} components={{ ...slidesComponents }} context={context} />
                    </div >
                </Scaler>
            ))
            }
        </div >
    );
};

export default PdfDeck;
