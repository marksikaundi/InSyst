import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function AuditResults({ results }: { results: Record<string, string | number | boolean | (string | number | boolean | Record<string, unknown>)[] | Record<string, unknown>> }) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Audit Results</h2>
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(results).map(([key, value], index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{key}</AccordionTrigger>
              <AccordionContent>
                {renderValue(value)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
  
  function renderValue(value: string | number | boolean | (string | number | boolean | Record<string, unknown>)[] | Record<string, unknown>): React.ReactNode {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return <p>{value.toString()}</p>
    } else if (Array.isArray(value)) {
      return (
        <ul className="list-disc pl-5">
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      )
    } else if (typeof value === 'object' && value !== null) {
      return (
        <div className="space-y-2">
          {Object.entries(value).map(([key, val], index) => (
            <div key={index}>
              <strong>{key}:</strong> {renderValue(val as string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[])}
            </div>
          ))}
        </div>
      )
    }
    return null
  }
  
  