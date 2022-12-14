import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import TCCustomInput from './TCCustomInput';

const GetDoxxedModal = ({ open, setOpen }) => {
    const [formData, setFormData] = useState({
        projectOwnerName: '',
        tokenName: '',
        ticker: 0,
        chain: '',
        contractAddress: '',
        emailAddress: '',
        rpNumber: '',
        avatarUrl: '',
    });

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed inset-0 z-50 overflow-y-auto'
                onClose={setOpen}
            >
                <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className='hidden sm:inline-block sm:h-screen sm:align-middle'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className='relative inline-block w-full max-w-4xl transform overflow-hidden rounded-2xl border border-white bg-black align-bottom shadow-xl transition-all sm:my-8 sm:align-middle'>
                            <div className='flex flex-col space-y-2 bg-black p-4 text-white md:p-8'>
                                <div className='flex items-center justify-between pb-4'>
                                    <h2 className='mx-auto text-base font-semibold'>
                                        Get Doxxed, Gain Trust
                                    </h2>

                                    <XIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() => setOpen(false)}
                                    />
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-x-2 pb-4 md:flex-row'>
                                    <span>
                                        To make a free report visit Home Page
                                    </span>
                                   
                                </div>

                                <div className='flex flex-col items-center md:flex-row md:space-x-10'>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Name of Project Owner'
                                            name='projectOwnerName'
                                            placeholder=''
                                            value={formData.projectOwnerName}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    projectOwnerName:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className='flex w-full flex-col md:flex-row md:items-center md:space-x-4'>
                                        <div className='space-y-3'>
                                            <TCCustomInput
                                                label='Name of Token'
                                                name='tokenName'
                                                placeholder=''
                                                value={formData.tokenName}
                                                onChange={e =>
                                                    setFormData({
                                                        ...formData,
                                                        tokenName:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className='flex flex-col items-center space-y-3 md:w-1/3'>
                                            <TCCustomInput
                                                label='Ticker'
                                                name='ticker'
                                                placeholder=''
                                                value={formData.ticker}
                                                onChange={e =>
                                                    setFormData({
                                                        ...formData,
                                                        ticker: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col items-center md:flex-row md:space-x-10'>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Chain/Network'
                                            name='chain'
                                            placeholder=''
                                            value={formData.chain}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    chain: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Contract Address'
                                            name='contractAddress'
                                            placeholder=''
                                            value={formData.contractAddress}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    contractAddress:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col items-center md:flex-row md:space-x-10'>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='What is your RP number?'
                                            name='rpNumber'
                                            placeholder=''
                                            value={formData.rpNumber}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    rpNumber: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Email Address'
                                            name='emailAddress'
                                            placeholder=''
                                            value={formData.emailAddress}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    emailAddress:
                                                        e.target.value,
                                                })
                                            }
                                            type='email'
                                        />
                                    </div>
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                    <TCCustomInput
                                        label='Avatar URL'
                                        name='avatarUrl'
                                        placeholder='https://'
                                        value={formData.avatarUrl}
                                        onChange={e =>
                                            setFormData({
                                                ...formData,
                                                avatarUrl: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className='flex w-full flex-col items-start space-y-0'>
                                    <span>
                                        IBT does not hold or process data.
                                        Visit : Reference Pass to obtain a RP
                                        Number:
                                    </span>
                                    <span>Get a RP Number here :</span>
                                    {/* <a
                                        href='https://www.referencepass.com/the-best-way-to-share-documents-online/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-500 transition hover:text-blue-700'
                                    >
                                        https://www.referencepass.com/the-best-way-to-share-documents-online/
                                    </a> */}
                                    <span>
                                        Open an account - You will be able to
                                        store your documents safely on the
                                        platform and
                                    </span>
                                    <span>
                                        show us without allowing us access to
                                        your documents.IBT is GDPR
                                        compliant.
                                    </span>
                                    <span>
                                        To get a RP Number - Use this special
                                        Discount Code for IBT Users:
                                        
                                    </span>
                                </div>

                                <div className='grid grid-cols-1 items-center gap-y-3 pt-6 md:grid-cols-3'>
                                    <span>0.4 BNB Per Person</span>
                                    <button className='h-11 w-fit self-center rounded-md bg-primary-brand px-12 text-white'>
                                        Connect Wallet
                                    </button>
                                    <span className='text-left leading-5'>
                                        Documents will be seen by our remote
                                        Notary Clerks Waiting time: Up to 48
                                        hours Processing time: Varies according
                                        to country of origin.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default GetDoxxedModal;
