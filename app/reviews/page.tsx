"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  content: string;
  date: string;
}

const STORAGE_KEY = "ayushrout-reviews";

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    rating: 5,
    content: "ayush is incredibly talented for his age. he built our landing page in record time and it looks amazing. highly recommend working with him.",
    date: "april 2026",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Startup Founder",
    rating: 5,
    content: "worked with ayush on an ios app concept. his understanding of user experience and clean design is impressive. will definitely collaborate again.",
    date: "march 2026",
  },
  {
    id: 3,
    name: "Emily Park",
    role: "Software Engineer",
    rating: 5,
    content: "ayush helped me understand ai integration for my project. patient, knowledgeable, and delivers quality work. a pleasure to work with.",
    date: "february 2026",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Student",
    rating: 4,
    content: "used mathiq+ for my sat prep. the app is clean and the problems are challenging. great for daily practice.",
    date: "january 2026",
  },
];

function StarRating({ rating, interactive = false, onRate }: { 
  rating: number; 
  interactive?: boolean;
  onRate?: (rating: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          disabled={!interactive}
          onClick={() => interactive && onRate?.(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={`${interactive ? "cursor-pointer" : "cursor-default"} transition-colors`}
        >
          <Star
            className={`h-4 w-4 ${
              star <= (hovered || rating)
                ? "fill-foreground text-foreground"
                : "fill-none text-muted-foreground/40"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 0,
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setReviews(parsed);
      } catch {
        setReviews(defaultReviews);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    }
  }, [reviews, isLoaded]);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length 
    : 0;
  
  const totalReviews = reviews.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.content || formData.rating === 0) return;

    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      const newReview: Review = {
        id: Date.now(),
        name: formData.name,
        role: formData.role || "anonymous",
        rating: formData.rating,
        content: formData.content.toLowerCase(),
        date: "just now",
      };
      
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", role: "", rating: 0, content: "" });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setIsFormOpen(false);
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          06 / testimonials
        </p>

        <h1 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl">
          what people say.
        </h1>

        <div className="flex items-center gap-4">
          <StarRating rating={Math.round(averageRating)} />
          <span className="text-sm text-muted-foreground">
            {averageRating.toFixed(1)} average from {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
          </span>
        </div>
        
        <p className="mt-4 text-sm text-muted-foreground">
          {totalReviews} {totalReviews === 1 ? "person has" : "people have"} shared their experience.
        </p>
      </section>

      {/* Add Review Button */}
      <section>
        {submitSuccess && (
          <div className="mb-6 rounded-lg bg-foreground/5 px-4 py-3 text-sm text-foreground">
            thank you for your review!
          </div>
        )}
        
        {!isFormOpen ? (
          <button
            onClick={() => setIsFormOpen(true)}
            className="rounded-lg border border-border bg-card px-6 py-3 text-sm text-foreground transition-all hover:bg-muted"
          >
            leave a review
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  your name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="john doe"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  your role
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="designer, developer, student..."
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  rating *
                </label>
                <StarRating 
                  rating={formData.rating} 
                  interactive 
                  onRate={(rating) => setFormData({ ...formData, rating })}
                />
              </div>
              
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  your review *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="share your experience working with ayush..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.content || formData.rating === 0}
                className="rounded-lg bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? "submitting..." : "submit review"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(false);
                  setFormData({ name: "", role: "", rating: 0, content: "" });
                }}
                className="rounded-lg border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                cancel
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Reviews List */}
      <section className="space-y-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          all reviews ({totalReviews})
        </p>
        
        <div className="space-y-8">
          {reviews.map((review) => (
            <article 
              key={review.id} 
              className="border-b border-border pb-8 last:border-0"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg text-foreground">{review.name}</h3>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} />
                  <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {review.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
