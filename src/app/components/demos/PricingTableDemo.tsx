import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";

export function PricingTableDemo() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
        "Email notifications"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Best for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Email + SMS notifications",
        "Custom integrations",
        "Team collaboration"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom SLA",
        "Unlimited storage",
        "Advanced security",
        "API access",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-3">Choose Your Plan</h3>
        <p className="text-gray-600 text-lg">Scale as you grow with flexible pricing</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`p-6 relative ${
              plan.popular 
                ? "scale-105 shadow-xl border-2 border-indigo-500" 
                : "shadow-md"
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600">
                Most Popular
              </Badge>
            )}

            <div className="mb-6">
              <h4 className="text-xl mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className={`w-full ${
                plan.popular 
                  ? "bg-indigo-600 hover:bg-indigo-700" 
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-gray-600">
        <p>All plans include a 14-day money-back guarantee • No credit card required</p>
      </div>
    </div>
  );
}
