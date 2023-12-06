import { useEffect, useState } from "react";
import { en, pt } from '../mocks/strings';

import { useConfigContext } from "../context/configuration";

export default function useStrings() {

  const { language } = useConfigContext();
  const [strings, setStrings] = useState(pt);

  useEffect(() => {
    language === 'en' ? setStrings(en) : setStrings(pt);
  }, [language]);

  return strings;
}