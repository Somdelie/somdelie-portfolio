"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Clock, ArrowRight } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  senderName: string;
  senderEmail: string;
}

export function SuccessModal({
  open,
  onClose,
  senderName,
  senderEmail,
}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] max-h-[85vh] overflow-y-auto p-0 border-border/50">
        {/* Success Header with Gradient - Compact */}
        <div className="relative bg-linear-to-br from-green-500 via-emerald-500 to-teal-500 p-6 text-white text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-3 animate-in zoom-in duration-500">
              <CheckCircle2 className="w-10 h-10 text-white animate-in zoom-in duration-700 delay-150" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white mb-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                Message Sent! 🎉
              </DialogTitle>
              <DialogDescription className="text-white/90 text-base animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                Thank you, {senderName}!
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Content - Compact */}
        <div className="p-5 space-y-4">
          {/* Info Cards */}
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 animate-in fade-in slide-in-from-left duration-500 delay-400">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-foreground mb-0.5">
                  Confirmation Email Sent
                </h4>
                <p className="text-xs text-muted-foreground break-all">
                  Check{" "}
                  <span className="font-medium text-primary">
                    {senderEmail}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/10 animate-in fade-in slide-in-from-right duration-500 delay-500">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-foreground mb-0.5">
                  Expected Response Time
                </h4>
                <p className="text-xs text-muted-foreground">
                  I&apos;ll get back to you within{" "}
                  <span className="font-medium text-orange-500">
                    24-48 hours
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps - Compact */}
          <div className="p-3 rounded-lg bg-muted/50 border border-border animate-in fade-in duration-500 delay-600">
            <h4 className="text-xs font-semibold text-foreground mb-1.5">
              What happens next?
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 text-primary" />
                <span>Confirmation email sent</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 text-primary" />
                <span>I&apos;ll respond within 24-48 hours</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 animate-in fade-in duration-500 delay-700">
            <Button
              onClick={onClose}
              className="flex-1 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 py-2"
            >
              Got it!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
