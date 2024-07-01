import { FilledLinkToMediaField } from '@prismicio/client';
import clsx from 'clsx';
import { parse } from 'csv-parse/browser/esm';

type Data = {
  [key: string]: string;
};

const DataTable = async ({tableCsv, hasHeader}:{tableCsv:FilledLinkToMediaField, hasHeader: boolean}) => {
    
     const readCSV=  async function (url: string): Promise<Data[]> {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok, could not read csv file.');
        }
        const data = await response.text();
        return new Promise((resolve, reject) => {
          parse(data, {
            columns: true,
            skip_empty_lines: true,
          }, (err, records) => {
            if (err) {
              return reject(err);
            }
            resolve(records);
          });
        });
    }
    
    const data = await readCSV(tableCsv.url);

  if (data.length === 0) {
    return <></>;
  }

  const headers = hasHeader ? Object.keys(data[0]) :null;

  return (
    //added the py-4 here, feel free to remove and add elsewhere if makes more sense
    <div className="container mx-auto py-4">
      <table className="min-w-full bg-white">
        {headers &&
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="py-2 px-4 border border-gray-300 bg-tertiary-orange text-left text-sm font-bold text-black"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        }
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, rowIndex) => (
                <td
                  key={rowIndex}
                  className={clsx("py-2 px-4 border border-gray-300 text-sm bg-quaternary-orange border-r", rowIndex === 0 && "font-bold bg-tertiary-orange text-black")}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
