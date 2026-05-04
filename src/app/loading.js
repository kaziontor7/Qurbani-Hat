import { Spinner } from "@heroui/react";


const loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
             <div className="flex flex-col items-center gap-2 justify-center h-screen">
        <Spinner size="lg" />
        <span className="text-xs text-muted"></span>
      </div>
        </div>
    );
};

export default loading;