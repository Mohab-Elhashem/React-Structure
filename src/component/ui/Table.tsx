interface TableProps {
    columns: string[];
    data: Record<string, React.ReactNode>[];
    striped?: boolean;
}

export const Table = ({
    columns,
    data,
    striped = false,
}: TableProps) => {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700 font-semibold border-b border-gray-200">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="px-6 py-3">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={
                                striped && rowIndex % 2 === 1
                                    ? 'bg-gray-50 hover:bg-gray-100'
                                    : 'bg-white hover:bg-gray-50'
                            }
                        >
                            {Object.values(row).map((val, colIndex) => (
                                <td key={colIndex} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {val}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};