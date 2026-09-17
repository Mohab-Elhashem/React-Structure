interface CardProps {
    title: string;
    description: string;
    image?: string;
    children?: React.ReactNode;
}

export const Card = ({
    title,
    description,
    image,
    children,
}: CardProps) => {
    return (
        <div className="max-w-sm rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                )}
                <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
            {children && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-100 mt-auto">
                    {children}
                </div>
            )}
        </div>
    );
};