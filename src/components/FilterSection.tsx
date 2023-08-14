import { styled } from "styled-components"
import { useFilterContext } from "../context/Filtercontext"
import { FaCheck } from "react-icons/fa"
import FormalPrice from "../Helpers/FormalPrice"
import { Button } from "../styles/Button"
const FilterSection = () => {
  const { filters: { text, category, color, price, maxPrice, minPrice }, updateFilterValue, all_products, clearFilters } = useFilterContext() as any

  const getUniqueData = (data: any, property: string) => {
    let new_val = data.map((each: any) => {
      return each[property]
    })
    if (property === "colors") {
      // return ["all",...new Set([].concat(new_val))]
      new_val = [...new_val.flat()]

    }
    return new_val = ["all", ...new Set(new_val)]
  }
  const categoryOnlyData = getUniqueData(all_products, "category")
  const companyOnlyData = getUniqueData(all_products, "company")
  const colorsOnlyData = getUniqueData(all_products, "colors")
  // console.log(colorsOnlyData);

  return (
    <Wrapper>
      <div className="fixed">
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder="SEARCH" />
          </form>
        </div>

        <div className="filter-category">
          <div>
            <h3 >CATEGORY</h3>
            {categoryOnlyData.map((each: any, index: number) => {
              return <button key={index} type="button" name='category' value={each} className={each === category ? "active" : ""} onClick={updateFilterValue}>
                {each}
              </button>
            })}
          </div>
        </div>

        <div className="filter-company">
          <h3>COMPANY</h3>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company--select"
              onChange={updateFilterValue}  // Changed onClick to onChange for select element
            >
              {companyOnlyData.map((curElem: any, index: number) => (
                <option key={index} value={curElem}>
                  {curElem}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="filter-colors colors">
          <h3>COLORS</h3>
          <div className="filter-color-style">
            {colorsOnlyData.map((each: any, index: number) => {
              if (each === "all") {
                return (
                  <button key={index} className="color-all--style" type="button"
                    value={each} name="color"
                    onClick={updateFilterValue}
                  >
                    All
                  </button>
                )
              }
              return (
                <button key={index} className={color === each ? "btnStyle active" : "btnStyle"} type="button" style={{ backgroundColor: each }}
                  value={each} name="color"
                  onClick={updateFilterValue}
                >
                  {color === each ? <FaCheck className="checkStyle" /> : null}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <div className="filter_price">
        <h3>price</h3>
        <p><FormalPrice price={price} /></p>
        <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>Clear Filter</Button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
  `
export default FilterSection