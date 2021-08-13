import React, { useEffect, useMemo, useReducer } from "react";
import { useProductData } from "../../../services/DataHandler";
import { Filters } from "../../organism";
import { CardGrid, FilterPanel } from "../../template";
import { FilterObj } from "../../template/FilterPanel/FilterPanel";
import { countDistinct, filterReducer, FilterState, Actions } from "./utils";

function ProductPage() {
  const { isError, isLoading, data } = useProductData();

  if (data) {
    const brandFilters = countDistinct(data.products.map((p) => p.brand));
    const genderFilters = countDistinct(data.products.map((p) => p.gender));
    const catsFilter = countDistinct(data.products.map((p) => p.category));
  }

  const [filterState, dispatch] = useReducer(filterReducer, FilterState);
  const FilterObjList: FilterObj[] = useMemo(
    () =>
      data
        ? [
            {
              name: Actions.Brand,
              filterList: countDistinct(data.products.map((p) => p.brand)),
            },
            {
              name: Actions.Category,
              filterList: countDistinct(data.products.map((p) => p.category)),
            },
          ]
        : [],
    [data]
  );
  useEffect(() => {
    console.log(filterState);
  }, [filterState]);

  return (
    <div>
      {isLoading
        ? "Loading..."
        : data && (
            <div>
              <FilterPanel
                filterObjList={FilterObjList}
                dispatchAction={dispatch}
              />
              <CardGrid produceList={data.products} />
            </div>
          )}
    </div>
  );
}

export default React.memo(ProductPage);
