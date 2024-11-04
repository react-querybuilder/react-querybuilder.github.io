import r from"@docusaurus/ExecutionEnvironment";r.canUseDOM&&(async()=>{let{formatQuery:r}=await import("react-querybuilder/formatQuery");globalThis.formatQuery=r;let{parseCEL:a}=await import("react-querybuilder/parseCEL");globalThis.parseCEL=a;let{parseJSONata:e}=await import("react-querybuilder/parseJSONata");globalThis.parseJSONata=e;let{parseJsonLogic:t}=await import("react-querybuilder/parseJsonLogic");globalThis.parseJsonLogic=t;let{parseMongoDB:o}=await import("react-querybuilder/parseMongoDB");globalThis.parseMongoDB=o;let{parseSpEL:i}=await import("react-querybuilder/parseSpEL");globalThis.parseSpEL=i;let{parseSQL:s}=await import("react-querybuilder/parseSQL");globalThis.parseSQL=s;let{transformQuery:l}=await import("react-querybuilder/transformQuery");globalThis.transformQuery=l,console.log(`RQB utilities available in the console:
 \u{2022} formatQuery
 \u{2022} parseCEL
 \u{2022} parseJSONata
 \u{2022} parseJsonLogic
 \u{2022} parseMongoDB
 \u{2022} parseSpEL
 \u{2022} parseSQL
 \u{2022} transformQuery`)})();