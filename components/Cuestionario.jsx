import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AdSense from 'react-adsense';

const preguntaInicial = [{
    q: '',
    options: [],
    answer: ''
}]

export default function Cuestionario({ questions, nextQ, firstQ }) {

    const router = useRouter()

    let refBtnClose = useRef()
    let refOpcion = useRef([])
    let refQuizOver = useRef()
    let refTextEnd1 = useRef()
    let refTextEnd2 = useRef()
    let refCorrectAnswers = useRef()
    let refTotalQuestions = useRef()
    let refTextBtnEnd = useRef()
    const [modal, setModal] = useState(0);
    const [score, setScore] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [numeroPregunta, setNumeroPregunta] = useState(0);
    const [respuestaSelect, setRespuestaSelect] = useState(0);

    const preguntas = []

    const dynamicRoute = useRouter().asPath

    useEffect(() => {
        setNumeroPregunta(0)
        setScore(0)
        setPuntaje(0)
    }, [dynamicRoute])

    useEffect(() => {
        router.beforePopState(() => {
            if (modal === 1) {
                refBtnClose.current.click()
            } else {
                return true
            }
        })
    }, [modal])

    questions.map((e, i) => {
        const question = {}
        question.q = e.pregunta
        question.options = [e.opcion1, e.opcion2, e.opcion3]
        question.answer = e.respuesta
        preguntas.push(question)
    })

    const enableClick = () => {
        let options = preguntas[numeroPregunta].options
        for (let index = 0; index < options.length; index++) {
            refOpcion.current[index].classList.remove("disabled", "correct", "wrong")
        }
    }

    const next = () => {
        if (!refOpcion.current[0].classList.contains("disabled")) {
            alert("Por favor, seleccione una opción")
        }
        else {
            setNumeroPregunta(numeroPregunta + 1)
            enableClick();
        }
    }

    function disableClick() {
        let options = preguntas[numeroPregunta].options
        for (let index = 0; index < options.length; index++) {
            refOpcion.current[index].classList.add("disabled")
            if (index === preguntas[numeroPregunta].answer) {
                refOpcion.current[index].classList.add('correct')
            }
        }
    }

    const revisar = (index) => {
        setRespuestaSelect(index)
        if (index === preguntas[numeroPregunta].answer) {
            refOpcion.current[index].className = "correct"
            setScore(score + 1)
        }
        else {
            refOpcion.current[index].className = "wrong"
        }
        disableClick();
    }

    const addPregunta = () => {
        if (preguntas.length > 0 && numeroPregunta != preguntas.length) {
            return (<div>{preguntas[numeroPregunta].q}</div>)
        } else if (preguntas.length > 1 && numeroPregunta === preguntas.length) {
            setNumeroPregunta(0)
            let puntos = score / preguntas.length
            setPuntaje(puntos)
            if (puntos < 0.99) {
                refQuizOver.current.classList.add("show")
                refTextEnd1.current.innerHTML = "¡Lección reprobada!"
                refTextEnd2.current.innerHTML = "¡Puedes hacerlo mejor!"
                refCorrectAnswers.current.innerHTML = score
                refTotalQuestions.current.innerHTML = preguntas.length
                refTextBtnEnd.current.innerHTML = "Intentar otra vez"
            } else {
                refQuizOver.current.classList.add("show")
                refTextEnd1.current.innerHTML = "¡Aprobaste esta lección!"
                refTextEnd2.current.innerHTML = "¿Quieres seguir estudiando?"
                refCorrectAnswers.current.innerHTML = score
                refTotalQuestions.current.innerHTML = preguntas.length
                if (nextQ[0]) {
                    refTextEnd1.current.innerHTML = "¡Aprobaste esta lección!"
                    refTextEnd2.current.innerHTML = "¿Quieres seguir estudiando?"
                    refTextBtnEnd.current.innerHTML = "Sí, siguiente lección"
                } else {
                    refTextEnd1.current.innerHTML = "¡Aprobaste esta lección!"
                    refTextEnd2.current.innerHTML = "¿Quieres seguir estudiando?"
                    refTextBtnEnd.current.innerHTML = "Sí, siguiente lección"
                }
            }
        }
    }
    const addOpciones = () => {
        if (preguntas.length > 0 && numeroPregunta < preguntas.length) {
            return (
                preguntas[numeroPregunta].options.map((opcion, index) => (
                    <div
                        key={index}
                        onClick={() => revisar(index)}
                        ref={el => (refOpcion.current = [...refOpcion.current, el])}
                    >{opcion}</div>
                ))
            )
        }
    }

    const finalizar = () => {
        if (puntaje === 1 && nextQ[0]) {
            setNumeroPregunta(0)
            setScore(0)
            setPuntaje(0)
            refQuizOver.current.classList.remove("show")
            refBtnClose.current.click()
            router.push({
                pathname: '/lecs/[categoria]/[slug]',
                query: { categoria: nextQ[0].slug_cat, slug: nextQ[0].slug },
            })
        } else if (puntaje === 1 && !nextQ[0]) {
            setNumeroPregunta(0)
            setScore(0)
            setPuntaje(0)
            refQuizOver.current.classList.remove("show")
            refBtnClose.current.click()
            router.push({
                pathname: '/lecs/[categoria]/[slug]',
                query: { categoria: firstQ[0].slug_cat, slug: firstQ[0].slug },
            })
        } else {
            setNumeroPregunta(0)
            setScore(0)
            setPuntaje(0)
            refQuizOver.current.classList.remove("show")
        }
    }

    const reiniciar = () => {
        setNumeroPregunta(0)
        setScore(0)
        enableClick()
        setPuntaje(0)
        refQuizOver.current.classList.remove("show")
    }


    return (
        <>
            <Link href="#c">
                <a>
                    <div onClick={() => setModal(1)} className={`btn btn-cuestionario bg-primario`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className={`fas fa-graduation-cap`}></i>
                        <h2>Cuestionario</h2>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </a>
            </Link>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog mx-auto">
                    <div className="modal-content">
                        <div className="modal-header">
                            <AdSense.Google
                                // 300x90-cues
                                client='ca-pub-3630578707238850'
                                slot='8459329975'
                                className='ads-mob'
                                style={{ display: 'inline-grid', width: 98 + '%', height: 50 + 'px', marginBottom: 10 + 'px' }}
                                format=''
                            />
                            <h5 className="modal-title" id="staticBackdropLabel">Cuestionario</h5>
                            <button onClick={() => (router.back())} className="btn-close" ></button>
                            <button onClick={() => setModal(0)} style={{ display: 'none' }} ref={refBtnClose} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="quiz-container">
                                <div className="question-number">
                                    <h3>Pregunta {numeroPregunta + 1} de {preguntas.length}
                                    </h3>
                                </div>
                                <div className="question">
                                    {addPregunta()}
                                </div>
                                <div className="options">
                                    {addOpciones()}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button onClick={() => reiniciar()} className="boton-primary">Reiniciar</button>
                                    <button onClick={() => next()} className="boton-primary">Siguiente</button>
                                </div>
                            </div>
                            <div ref={refQuizOver} className="quiz-over">
                                <div className="box">
                                    <button className="cerrar text-light" onClick={() => reiniciar()}>x</button>
                                    <h2 className="text-center">
                                        <span ref={refTextEnd1} className="text-end"></span>
                                        {
                                            puntaje == 1 ?
                                                <div className="mt-2">
                                                    <i style={{ color: '#9cf27f' }} className="far fa-2x fa-thumbs-up"></i>
                                                </div>
                                                :
                                                <div className="mt-2">
                                                    <i style={{ color: '#ff9797' }} className="far fa-2x fa-thumbs-down"></i>
                                                </div>
                                        }
                                    </h2>
                                    <p className="text-center">
                                        <span ref={refCorrectAnswers}></span> de <span ref={refTotalQuestions}></span> respuestas correctas.
                                        <br />
                                    </p>
                                    <h5 ref={refTextEnd2} className="text-end text-center"></h5>
                                    <button className="btn-final" onClick={() => finalizar()}><span ref={refTextBtnEnd}></span></button>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
