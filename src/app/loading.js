import { Spinner } from "@heroui/react";


const loading = () => {
    return (
        <div className="flex items-center justify-center">
             <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted">Large</span>
      </div>
        </div>
    );
};

export default loading;