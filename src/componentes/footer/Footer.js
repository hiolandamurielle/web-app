import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import useFetchAPI from "../../FetchAPI";

const Footer  = (props) =>{
    const movieAPI = useFetchAPI();
    const [page, setPage] = useState (1);
    const [totalPages, setTotalPages] = useState(1);

    // useEffect(() => {
    //     // console.log(page)
    //          movieAPI.fetchAPI( page);
    //      }, [ page]);
     
    // useEffect(() => {
    //          if (movieAPI.data.results === undefined) return
    //          // console.log(movieAPI.data.results)
    //          setTotalPages(movieAPI.data.total_pages)
    //      }, [movieAPI.data]);

    const changePage = (event, value) => {
        // console.log("CHANGE PAGE");
         //console.log(value);
        setPage(value)
    };

    return(
        <div>
            <Pagination
                className="my-3"
                count={totalPages}
                page={page}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                onChange={changePage}
            />
        </div>
    )
}

export default Footer
