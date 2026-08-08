import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught React Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 text-white">
          <AlertTriangle size={56} className="text-emerald-400 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Something went wrong loading this section</h2>
          <p className="text-white/60 mb-6 max-w-md text-sm">
            We encountered an unexpected rendering error. Click below to reload the page or return to safety.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all text-sm"
            >
              <RefreshCw size={16} /> Reload Page
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.04] border border-white/10 text-white font-semibold rounded-full hover:bg-white/[0.08] transition-all text-sm"
            >
              Return to Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
