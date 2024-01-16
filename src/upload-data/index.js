import Box from "@mui/material/Box";
import { useState, useRef, useEffect } from "react";
import Buttons from "../component/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import {
  DeleteBlackListNumber,
  DownloadPhoneSms,
  GetCsvList,
  PasswordCheck,
  SearchDoc,
  SendMassage,
  saveCsvFile,
} from "../controller/AuthController";
import ShowSearch from "../component/Modal/showSearch";
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress, Grid, Menu, MenuItem, TextField } from "@mui/material";
import { createLead } from "../controller/AuthController";
import { createBlackList } from "../controller/AuthController";
import { BlackListSearchDoc } from "../controller/AuthController";
import ShowBlackListSearch from "../component/Modal/showBlackListSearch";
import ShowPhoneSearch from "../component/Modal/showPhoneSearch";
import PageLoader from "../component/pageLoader";
import GetCsvListModal from "../component/Modal/getCsvList";
import { DownloadCsv, DeleteCsv } from "../controller/AuthController";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import PrivacyPolicy from "../component/Modal/privacyPolicy";
import { SearchSms } from "../controller/AuthController";
import CheckPasswordModal from "../component/Modal/checkPassword";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#00000085",
        display: "flex",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{ position: "relative", display: "inline-flex", margin: "auto" }}
      >
        <CircularProgress variant="determinate" {...props} size={80} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ color: "#fff", fontSize: "18px" }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const Search = styled("div")(() => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  width: "100%",
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(1),
  //   width: 'auto',
  // },
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    //   padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //   transition: theme.transitions.create('width'),
    width: "100%",
    //   [theme.breakpoints.up('sm')]: {
    //     width: '12ch',
    //     '&:focus': {
    //       width: '20ch',
    //     },
    //   },
  },
}));

function UploadData() {
  const [file, setFile] = useState(undefined);
  const [search, setSearch] = useState("");
  const [blackListSearch, setBlackListSearch] = useState("");
  const [data, setData] = useState("");
  const [blackListNumber, setBlackListNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [blackListModalOpen, setBlackListModalOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [csvListData, setCsvListData] = useState("");
  const [getCsvModalOpen, setGetCsvModalOpen] = useState(false);
  const [passwordCheckModal, setPasswordCheckModal] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState("");
  const [massage, setMassage] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phone, setPhone] = useState("");
  const [blackList, setBlackList] = useState("");
  const [msg, setMsg] = useState("");
  const [phoneSearch, setPhoneSearch] = useState("");
  const [phoneSmsData, setPhoneSmsData] = useState([]);
  // const [policy, setPolicy] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const menuRef = useRef()

  useEffect(() => {
    setMenuHeight(menuRef.current.clientHeight)
  }, [menuRef])

  // const getLocation = (ip) => {
  //     return fetch(`https://ipapi.co/${ip}/json/`, {
  //         method: "GET",
  //     })
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data)
  //             return data
  //         })
  // }

  // send msg
  const PostMsg = async () => {
    setLoading(true);
    // fetch('https://api.ipify.org?format=json', {
    //     method: "GET",
    //     headers: {
    //     }
    // })
    //     .then((res) => res.json())
    //     .then(async (data) => {
    //         const { city, region } = await getLocation(data.ip)
    //         console.log(region, "loc")
    //         const ts = new Date();

    const d = {
      phone: msg,
    };
    console.log(d);
    const sendMsg = await SendMassage(d);
    console.log("sendMsg: ", sendMsg);
    setMsg("");
    setMassage("success");
    setOpen(true);
    setPrivacyOpen(false);
    setLoading(false);
    // })
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  // search phone no
  const HandleSearch = async () => {
    if (search) {
      setLoading(true);
      const value = await SearchDoc(search);
      if (value.success) {
        setData(value.data);
        setModalOpen(true);
      } else {
        console.log("wrong search");
        setMassage("Datos no encontrados");
        setOpen(true);
      }
      setLoading(false);
    } else {
      setMassage("Por favor ingrese el valor para la búsqueda");
      setOpen(true);
    }
  };

  // search phone no

  const HandlePhoneSearch = async () => {
    if (phoneSearch) {
      setLoading(true);
      const value = await SearchSms(phoneSearch);
      if (value.success) {
        setPhoneSmsData(value.data);
        setPhoneModalOpen(true);
      } else {
        setMassage("Datos no encontrados");
        setOpen(true);
      }
      setLoading(false);
    } else {
      setMassage("Por favor ingrese el valor para la búsqueda");
      setOpen(true);
    }
  };

  // get csv list

  const getCsv = async () => {
    setLoading(true);
    setGetCsvModalOpen(true);
    const csv = await GetCsvList();
    if (csv.success) {
      setCsvListData(csv.data.list);
      console.log(csv.data.list);
      setLoading(false);
    } else {
      setMassage("Documento no encontrado");
      setOpen(true);
      setLoading(false);
    }
  };

  // delete and download csv

  const downloadCsv = async (index) => {
    setLoading(true);
    const getDownload = await DownloadCsv(csvListData[index]);
    console.log("data: ", csvListData[index]);
    console.log("getDownload: ", getDownload);
    if (getDownload.success) {
      const link = document.createElement("a");
      link.href = getDownload.data;
      link.download = csvListData[index];
      link.click();
      setLoading(false);
    }
  };

  const DownloadSms = async (data) => {
    setLoading(true)
    const result = await DownloadPhoneSms(data)
    console.log("result: ", result);
    if (result.success) {
      const link = document.createElement("a");
      link.href = result.data;
      link.download = "data";
      link.click();
      setLoading(false);
    }
  }

  const DeleteCsvList = async (index) => {
    console.log(csvListData[index]);
    setLoading(true);
    const getDelete = await DeleteCsv(csvListData[index]);
    if (getDelete.success) {
      getCsv();
      setLoading(false);
    }
  };

  // search blackList no

  const HandleBlackListSearch = async () => {
    if (blackListSearch) {
      setLoading(true);
      const value = await BlackListSearchDoc(blackListSearch);
      if (value.success) {
        setBlackListNumber(value.data);
        setBlackListModalOpen(true);
      } else {
        console.log("wrong search");
        setMassage("Datos no encontrados");
        setOpen(true);
      }
      setLoading(false);
    } else {
      setMassage("Por favor ingrese el valor para la búsqueda");
      setOpen(true);
    }
  };

  // delete blackList Number

  const DeleteNumber = async (data) => {
    setLoading(true);
    const deleteNumber = await DeleteBlackListNumber(data);
    console.log("deleteNumber: ", deleteNumber);
    if (deleteNumber.success === true) {
      setBlackListModalOpen(false);
      setLoading(false);
      setMassage("Eliminar el número de la lista negra de la lista");
      setOpen(true);
    }
  };

  // add phone No

  const SavePhoneNo = async () => {
    if (phone) {
      setLoading(true);
      // const ts = new Date();

      const d = {
        phone: phone,
      };
      const result = await createLead(d);
      if (result.success) {
        setLoading(false);
        setMassage("subido con éxito");
        setOpen(true);
        setPhone("");
      } else {
        setLoading(false);
      }
    } else {
      setMassage("Por favor ingrese un número de teléfono válido");
      setOpen(true);
    }
  };

  const SaveBlackListNo = async () => {
    if (blackList) {
      setLoading(true);
      // const ts = new Date();

      const d = {
        phone: blackList,
      };
      const result = await createBlackList(d);
      if (result.success) {
        console.log("result: ", result);
        setLoading(false);
        setMassage("subido con éxito");
        setOpen(true);
        setBlackList("");
      } else {
        setLoading(false);
      }
    } else {
      setMassage("Por favor ingrese un número de teléfono válido");
      setOpen(true);
    }
  };

  const handleClick = () => {
    const formData = new FormData();
    formData.append("file", file);
    if (file) {
      startInterval();
      const interval = setInterval(startInterval, 6000);
      console.log("interval: ", interval);
      //  setLoading(true)
      const saveData = saveCsvFile(formData);
      saveData.then((data) => {
        setTimeout(() => {
          if (data.success) {
            setMassage("Documento cargado exitosamente");
            setOpen(true);
            stopInterval(interval);
            setFile(undefined);
            // setLoading(false)
          } else {
            stopInterval(interval);
            console.log(data);
            setFile(undefined);
          }
        }, 12000);
      });
    } else {
      setMassage("Seleccione un archivo");
      setOpen(true);
    }
  };

  function startInterval() {
    setProgress((prevProgress) => (prevProgress >= 99 ? 0 : prevProgress + 1));
  }

  function stopInterval(interval) {
    setProgress(100);
    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
  }

  const handleClose = (reason) => {
    setOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      HandleSearch();
    }
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenList = async () => {
    const result = await PasswordCheck(checkedPassword)
    if (result.valid) {
      console.log("resulttrue: ", result);
      localStorage.setItem('accessedPayments', true);
      navigate("/payments")
    } else {
      console.log("resultFalse: ", result);
    }
  }

  useEffect(() => {
    localStorage.removeItem('accessedPayments');
  }, []);

  return (
    <>
      {progress > 0 && progress < 100 ? (
        <CircularProgressWithLabel value={progress} />
      ) : (
        <></>
      )}
      <Box sx={{ height: { md: `calc(97vh - ${menuHeight}px)`, xs: "auto" }, p: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }} ref={menuRef}>
          <IconButton onClick={handleOpenUserMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* const settings = ["Profile", "Logout"]; */}
            <MenuItem onClick={() => {
              setPasswordCheckModal(true)
              handleCloseUserMenu()
            }}>
              <Typography textAlign="center">Pagos</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            borderRadius: "12px",
            border: "1px solid #FE545C",
            height: "100%",
          }}
        >
          <Grid sx={{ height: "95%", p: "20px" }} spacing={"20px"} container>
            <Grid
              // sx={{
              //   padding: "20px 10px 20px 20px",
              // }}
              item
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #FE545C",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    boxSizing: "border-box",
                    background: " rgba(255, 255, 255, 0.5)",
                    py: "8px",
                    px: "16px",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        position: { md: "absolute", xs: "relative" },
                        width: "100%",
                        top: { md: "50%", xs: 0 },
                        left: { md: "50%", xs: 0 },
                        transform: { md: "translate(-50%, -50%)", xs: "none" },
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 2
                      }}
                    >
                      <Box component="Box">
                        <Search>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              rowGap: 1,
                              py: "8px",
                              px: { md: "16px", xs: 0 },
                            }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: {
                                  xs: "center",
                                  md: "flex-start",
                                },
                              }}
                            >
                              <Typography>
                                Subida de múltiples contactos
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  pb: "5px",
                                  textAlign: { xs: "center", md: "left" },
                                }}
                              >
                                Buscar por número de teléfono
                              </Typography>
                              <Box
                                sx={{
                                  border: "1px solid black",
                                  borderRadius: "8px",
                                  px: 1,
                                  py: "2px",
                                }}
                              >
                                <StyledInputBase
                                  type="search"
                                  name="Search"
                                  onChange={(e) => setSearch(e.target.value)}
                                  onKeyDown={handleKeyDown}
                                />
                                <IconButton onClick={HandleSearch} size="small">
                                  <SearchIcon />
                                </IconButton>
                              </Box>
                            </Box>
                          </Box>
                        </Search>
                        {/* <FontAwesomeIcon className='search-icon' icon={faSearch} size="1x"/> */}
                      </Box>
                      <Box sx={{ px: { md: "50px", xs: "0" } }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: "1px dashed black",
                            paddingY: "20px",
                            paddingX: "50px",
                            rowGap: 1,
                          }}
                        >
                          <img
                            src="/assets/image/cloudUpload.png"
                            alt="file"
                            width="80px"
                          />
                          <Buttons
                            sx={{ position: "relative", width: "80%" }}
                            variant="contained"
                          >
                            <input
                              accept=".csv"
                              style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "100%",
                                height: "100%",
                                margin: 0,
                                fontSize: "23px",
                                cursor: "pointer",
                                opacity: 0,
                                direction: "ltr",
                              }}
                              className="input"
                              id="icon-button-file"
                              type="file"
                              name="..."
                              onChange={handleChange}
                              onClick={(event) => (event.target.value = null)}
                            />
                            <Typography>Selecciona archivo</Typography>
                          </Buttons>
                          {file ? (
                            <Typography
                              sx={{ fontSize: "15px", color: "green" }}
                            >
                              {file.name}
                            </Typography>
                          ) : (
                            <Typography sx={{ fontSize: "15px", color: "red" }}>
                              Elige un archivo
                            </Typography>
                          )}
                          <Typography sx={{ fontSize: "15px" }}>
                            o arrastra y suéltalos aquí
                          </Typography>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: 600 }}
                          >
                            .csv{" "}
                          </Typography>
                        </Box>
                        <Box mb={2}>
                          <Typography sx={{ fontSize: "12px" }}>
                            El límite es de 50.000 números
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Buttons
                            onClick={handleClick}
                            sx={{ my: 1 }}
                            variant="contained"
                          >
                            Subir archivo
                          </Buttons>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                // padding: "20px 20px 20px 10px",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #FE545C",
                  height: { md: "25%", xs: "auto" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    boxSizing: "border-box",
                    background: " rgba(255, 255, 255, 0.5)",
                    py: "8px",
                    px: "16px",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}
                  >
                    Subida de 1 contacto
                  </Typography>
                  <Box
                    sx={{
                      position: { md: "absolute", xs: "relative" },
                      width: "100%",
                      top: { md: "50%", xs: 0 },
                      left: { md: "50%", xs: 0 },
                      transform: { md: "translate(-50%, -50%)", xs: "none" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <TextField
                        type="number"
                        size="small"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <Buttons
                        sx={{ display: "flex", borderRadius: "20px" }}
                        onClick={SavePhoneNo}
                      >
                        <AddIcon sx={{ mr: 1 }} />
                        <Typography sx={{ fontSize: "10px" }}>
                          Añadir número
                        </Typography>
                      </Buttons>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  border: "1px solid #FE545C",
                  height: { md: "50%", xs: "auto" },
                }}
              >
                <Box
                  sx={{
                    boxSizing: "border-box",
                    background: " rgba(255, 255, 255, 0.5)",
                    py: "8px",
                    px: "16px",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}
                  >
                    Lista negra de contactos
                  </Typography>
                  <Box
                    sx={{
                      position: { md: "absolute", xs: "relative" },
                      width: "100%",
                      top: { md: "50%", xs: 0 },
                      left: { md: "50%", xs: 0 },
                      transform: { md: "translate(-50%, -50%)", xs: "none" },
                    }}
                  >
                    <Box>
                      <Box sx={{ pb: { xs: "0px", md: "40px" } }}>
                        <Search>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  pb: "5px",
                                  textAlign: { xs: "center", md: "left" },
                                }}
                              >
                                Buscar por número de teléfono
                              </Typography>
                              <Box
                                sx={{
                                  border: "1px solid black",
                                  borderRadius: "8px",
                                  px: 1,
                                  py: "2px",
                                }}
                              >
                                <StyledInputBase
                                  type="search"
                                  name="Search"
                                  onChange={(e) =>
                                    setBlackListSearch(e.target.value)
                                  }
                                  onKeyDown={handleKeyDown}
                                />
                                <IconButton
                                  onClick={HandleBlackListSearch}
                                  size="small"
                                >
                                  <SearchIcon />
                                </IconButton>
                              </Box>
                            </Box>
                          </Box>
                        </Search>
                        {/* <FontAwesomeIcon className='search-icon' icon={faSearch} size="1x"/> */}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: "20px",
                          justifyContent: "center",
                        }}
                      >
                        <TextField
                          type="number"
                          size="small"
                          value={blackList}
                          onChange={(e) => setBlackList(e.target.value)}
                        />
                        <Buttons
                          sx={{ display: "flex", borderRadius: "20px" }}
                          onClick={SaveBlackListNo}
                        >
                          <AddIcon sx={{ mr: 1 }} />
                          <Typography sx={{ fontSize: "10px" }}>
                            Añadir número
                          </Typography>
                        </Buttons>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  // borderRadius: "12px",
                  // border: "1px solid #FE545C",
                  height: { md: "25%", xs: "auto" },
                }}
              >
                <Grid container sx={{ height: "100%", rowGap: "20px" }}>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        borderRadius: "12px",
                        border: "1px solid #FE545C",
                        height: "100%",
                        mr: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          boxSizing: "border-box",
                          background: " rgba(255, 255, 255, 0.5)",
                          py: "8px",
                          px: "16px",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            mb: 2,
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          descargar documento
                        </Typography>
                        <Box
                          sx={{
                            position: { md: "absolute", xs: "relative" },
                            width: "100%",
                            top: { md: "50%", xs: 0 },
                            left: { md: "50%", xs: 0 },
                            transform: {
                              md: "translate(-50%, -50%)",
                              xs: "none",
                            },
                          }}
                        >
                          <Grid
                            container
                            sx={{
                              alignItems: "flex-end",
                              gap: "20px",
                              justifyContent: "center",
                            }}
                          >
                            <Box>
                              <Buttons onClick={getCsv}>Descargar</Buttons>
                            </Box>
                          </Grid>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box
                      sx={{
                        borderRadius: "12px",
                        border: "1px solid #FE545C",
                        height: "100%",
                        ml: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          rowGap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Box
                            sx={{
                              border: "1px solid black",
                              borderRadius: "8px",
                              px: 1,
                              py: "2px",
                            }}
                          >
                            <StyledInputBase
                              type="search"
                              name="Search"
                              onChange={(e) => setPhoneSearch(e.target.value)}
                              // onKeyDown={handleKeyDown}
                              value={phoneSearch}
                            />
                            <IconButton
                              onClick={HandlePhoneSearch}
                              size="small"
                            >
                              <SearchIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Box>
                            <TextField
                              type="text"
                              size="small"
                              value={msg}
                              onChange={(e) => setMsg(e.target.value)}
                            />
                          </Box>
                          <Box>
                            <Buttons onClick={PostMsg}>Enviar SMS</Buttons>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5%"
            }}
          >
            <Buttons
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Cerrar Sesión
            </Buttons>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={4000}
        onClose={handleClose}
        message={massage}
        action={action}
      />
      <PrivacyPolicy open={privacyOpen} setOpen={setPrivacyOpen} />
      <ShowSearch
        data={data}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <ShowBlackListSearch
        DeleteNumber={DeleteNumber}
        data={blackListNumber}
        setModalOpen={setBlackListModalOpen}
        modalOpen={blackListModalOpen}
      />
      <ShowPhoneSearch
        data={phoneSmsData}
        setModalOpen={setPhoneModalOpen}
        modalOpen={phoneModalOpen}
        DownloadSms={DownloadSms}
      />
      <GetCsvListModal
        downloadCsv={downloadCsv}
        DeleteCsvList={DeleteCsvList}
        data={csvListData}
        setModalOpen={setGetCsvModalOpen}
        modalOpen={getCsvModalOpen}
      />
      <CheckPasswordModal
        open={passwordCheckModal}
        handleClose={() => setPasswordCheckModal(false)}
        password={checkedPassword}
        setPassword={setCheckedPassword}
        handleClick={handleOpenList}
      />
      {loading && <PageLoader />}
    </>
  );
}

export default UploadData;
