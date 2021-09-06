type GetPageOffset = {
  page: number
}

type GetIdFrolUrl = {
  url: string
}

type ZeroPad = {
  number: number,
  size: number
}

export const getPageOffset = ({ page }: GetPageOffset) => {
  return page * Number.parseInt(process.env.REACT_APP_PAGE_SIZE!);
}

export const getIdFrolUrl = ({ url }: GetIdFrolUrl) => {
  const figo = url.match(/.+\/(\d+)\/$/);
  return Number.parseInt(figo?.[1]!);
}

export const zeroPad = ({ number, size }: ZeroPad) => String(number).padStart(size, '0');

export const screenSize = () => window.innerWidth;