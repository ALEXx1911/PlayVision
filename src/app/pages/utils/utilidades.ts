
export function getFormationCode(formationType: string): string {
        switch (formationType) {
            case "4-3-3":
                return "alineacion1";
            case "4-4-2":
                return "alineacion2";
            case "4-2-3-1":
                return "alineacion3";
            case "3-5-2":
                return "alineacion4";
            case "5-3-2":
                return "alineacion5";
            default:
                return "alineacion1";
        }
};
